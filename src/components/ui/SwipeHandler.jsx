
const SwipeHandler = ({ onSwipeLeft, onSwipeRight, children }) => {
    let startX = 0;

    const handleTouchStart = (e) => {
        startX = e.touches[0].clientX;
    };

    const handleTouchEnd = (e) => {
        const endX = e.changedTouches[0].clientX;
        const diff = startX - endX;
        if (diff > 50) {
            onSwipeLeft();
        } else if (diff < -50) {
            onSwipeRight();
        }
    };

    const handleMouseDown = (e) => {
        startX = e.clientX;
    };

    const handleMouseUp = (e) => {
        const endX = e.clientX;
        const diff = startX - endX;
        if (diff > 50) {
            onSwipeLeft();
        } else if (diff < -50) {
            onSwipeRight();
        }
    };

    return (
        <div 
            onTouchStart={handleTouchStart} 
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown} 
            onMouseUp={handleMouseUp}
        >
            {children}
        </div>
    );
};

export default SwipeHandler;
