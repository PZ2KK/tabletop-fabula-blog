import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Smile, Link as LinkIcon, Facebook, Twitter, Linkedin } from 'lucide-react';
import Button from './ui/Button';
import LoginModal from './ui/LoginModal';
import { toast } from 'sonner'
import { cn } from '@/lib/utils';


const BlogPost = () => {
  const { postId } = useParams();
  const [modalToggle, setModalToggle] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [likesCount, setLikesCount] = useState(321);
  const [hasLiked, setHasLiked] = useState(false);

  const handleSend = () => {
    if (!isLogin) {
      setModalToggle(!modalToggle);
    } else {

    }
  };

  const handleLike = () => {
    if (!isLogin) {
      setModalToggle(!modalToggle);
    } else {
      if (!hasLiked) {
        setLikesCount(likesCount + 1);
      } else {
        setLikesCount(likesCount - 1);
      }
      setHasLiked(!hasLiked);
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success("Copied!", {
      richColors: true,
      description: 'This article has been copied to your clipboard',
    });
  };

  // Mocked blog post data
  const post = {
    id: postId,
    category: 'Cat',
    date: '11 September 2024',
    title: 'The Fascinating World of Cats: Why We Love Our Furry Friends',
    content: `<p>Cats have captivated human hearts for thousands of years. Whether lounging in a sunny spot or playfully chasing a string, these furry companions bring warmth and joy to millions of homes. But what makes cats so special? Let's dive into the unique traits, behaviors, and quirks that make cats endlessly fascinating.</p>
    
    <h2>1. Independent Yet Affectionate</h2>
    <p>One of the most remarkable traits of cats is their balance between independence and affection. Unlike dogs, who are often eager for constant attention, cats enjoy their alone time. They can spend hours grooming themselves, exploring the house, or napping in quiet corners. However, when they want affection, they know how to seek it out with a soft purr, a gentle nuzzle, or by curling up on your lap.</p>
    <p>This duality makes cats appealing to many people who appreciate the fact that these feline companions are low-maintenance but still loving. It's like having a roommate who enjoys your company but doesn't demand too much of your time!</p>
    
    <h2>2. Playful Personalities</h2>
    <p>Cats are naturally curious and playful. From kittens to adults, they enjoy engaging with toys, stalking furniture, or chasing after imaginary prey. Their play often mimics hunting behavior, which is a nod to their wild ancestors. Whether they're pouncing on a feather toy or darting across the room, this playfulness keeps their agility and energy are mesmerizing to watch.</p>
    <p>This playfulness also serves as a mental stimulation for cats. Providing toys and opportunities to climb helps them stay fit, reduces boredom, which is important for indoor cats.</p>
    
    <h2>3. Communication Through Body Language</h2>
    <p>Cats are master communicators, though they do so in subtle ways. Understanding a cat's body language can deepen the bond between you and your pet. Here are some common signals:</p>
    <ul class="list-disc pl-6 space-y-2">
      <li>Purring: Usually a sign of contentment, though cats may also purr when anxious or in pain.</li>
      <li>Tail Position: A held high tail usually indicates a happy and confident cat, while a puffed-up tail suggests fear or aggression.</li>
      <li>Slow Blinks: Cats often use blinking as a way to express trust and affection. If your cat slow blinks at you, try returning the gesture to strengthen your bond.</li>
    </ul>
    <p>Learning to read these cues can help you respond to your cat's needs and emotions more effectively.</p>
    
    <h2>4. Health Benefits of Having a Cat</h2>
    <p>Did you know that owning a cat can be good for your health? Studies have shown that petting a cat can reduce stress and lower blood pressure. The calming sound of a cat's purr is often associated with healing properties, while the companionship of a cat can have significant benefits, providing emotional support to their owners.</p>
    <p>People who live with cats may also experience reduced feelings of anxiety and depression, thanks to the comfort and companionship these animals provide.</p>
    
    <h2>5. A History with Humans</h2>
    <p>Cats were first domesticated in the Near East around 9,000 years ago, likely because they were excellent at catching rodents that threatened food supplies. Over time, their relationship with humans evolved from pest control to companionship.</p>
    <p>In ancient Egypt, cats were revered and even worshipped. Killing a cat, even accidentally, was punishable by death, and families often mummified their cats to honor them after death. Today, while not seen as divine figures, cats remain cherished members of the family.</p>`,
    author: {
      name: 'Thompson P.',
      avatar: 'https://i.pravatar.cc/100?img=3',
      bio: `I am a pet enthusiast and freelance writer who specializes in animal behavior and care. With a deep love for cats, I enjoy sharing insights on feline companionship and welfare.

When I'm not writing, I spend time volunteering at my local animal shelter, helping cats find loving homes.`
    },
    comments: [
      {
        id: 1,
        name: 'Jacob Lash',
        avatar: 'https://i.pravatar.cc/100?img=4',
        date: '11 September 2024 at 15:35',
        content: 'I loved this article! It really explains why my cat is so independent yet loving. The purring section was super interesting.'
      },
      {
        id: 2,
        name: 'Ahri',
        avatar: 'https://i.pravatar.cc/100?img=5',
        date: '12 September 2024 at 09:15',
        content: 'Such a great read! I\'ve always wondered why my cat slow blinks at me—now I know it\'s her way of showing trust!'
      },
      {
        id: 3,
        name: 'Mimi mama',
        avatar: 'https://i.pravatar.cc/100?img=6',
        date: '12 September 2024 at 15:30',
        content: 'This article perfectly captures why cats make such amazing pets. I had no idea that purring could help with healing. Fascinating stuff!'
      }
    ]
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8 pt-36">
      {/* Login Modal */}
      {modalToggle && <LoginModal modalToggle={modalToggle} setModalToggle={setModalToggle} />}
      
      <div className="flex flex-col md:flex-row gap-8">
        {/* Main Content */}
        <div className="md:w-2/3">
          {/* Category and Date */}
          <div className="mb-4">
            <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium mr-2">{post.category}</span>
            <span className="text-gray-500 text-sm">{post.date}</span>
          </div>
          
          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold mb-6">{post.title}</h1>
          
          {/* Featured Image */}
          <div className="mb-8 rounded-xl overflow-hidden">
            <img 
              src="/lovable-uploads/570fccce-af77-48fe-8cf3-c3d7795c6300.png" 
              alt="Cat relaxing with person" 
              className="w-full h-auto object-cover"
            />
          </div>
          
          {/* Content */}
          <div 
            className="prose max-w-none mb-12"
            dangerouslySetInnerHTML={{ __html: post.content }}
          ></div>
          
          {/* Interaction Buttons */}
          <div className="flex flex-wrap justify-between items-center gap-4 mb-12 px-6 py-4 bg-gray-100 rounded-xl shadow-xl">
            {/* Left Box */}
            <button 
              onClick={handleLike}
              className="flex items-center px-9 py-2 rounded-full bg-white border border-gray-300 hover:bg-gray-100 transition-colors cursor-pointer"
            >
              <Smile className={cn(`h-5 w-5 mr-2 ${hasLiked ? 'text-white fill-yellow-500' : 'text-gray-700'}`)} />
              <span>{likesCount}</span>
            </button>
            
            {/* Right Box */}
            <div className="flex flex-row gap-3">
              {/* CopyLink */}
              <button 
                onClick={handleCopyLink}
                className="flex items-center px-8 py-2 rounded-full bg-white hover:bg-gray-100 border border-gray-300 transition-colors cursor-pointer"
              >
                <LinkIcon className="h-5 w-5 text-gray-700 mr-2" />
                <span>Copy link</span>
              </button>
              
              {/* Facbook */}
              <a 
                href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center px-3 rounded-full bg-[#1877F2] hover:bg-[#165EBD] transition-colors cursor-pointer"
              >
                <Facebook className="h-5 w-5 text-white" />
              </a>

              {/* LikedIn */}
              <a 
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}`}
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center px-3 rounded-full bg-[#0077B5] hover:bg-[#006A97] transition-colors cursor-pointer"
              >
                <Linkedin className="h-5  w-5 text-white" />
              </a>

              {/* Twitter */}
              <a 
                href={`https://twitter.com/intent/tweet?url=${window.location.href}`}
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center px-3 rounded-full bg-[#55ACEE] hover:bg-[#4D99D3] transition-colors cursor-pointer"
              >
                <Twitter className="h-5 w-5 text-white" />
              </a>
            </div>
          </div>
          
          {/* Comments Section */}
          <div className="mb-8">
            <h2 className="text-lg text-gray-600">
              Comment
            </h2>
            {/* Comment Form */}
            <div className="flex flex-col items-end">
              <textarea 
                placeholder="What are your thoughts?"
                onChange={(e) => setComment(e.target.value)}
                className="w-full px-4 py-3 text-gray-600 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-200 focus:outline-none resize-none"
                rows={4}
              />
              <div className="flex w-50 mt-2">
                <Button 
                  text="Send" 
                  style="black" 
                  onClick={handleSend}
                />
              </div>
            </div>

            {/* Existing Comments */}
            {post.comments.map((comment) => (
              <div key={comment.id} className="border-b border-gray-200 py-6">
                <div className="flex items-center mb-2">
                  <img 
                    src={comment.avatar} 
                    alt={comment.name} 
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <h4 className="font-medium">{comment.name}</h4>
                    <p className="text-gray-500 text-sm">{comment.date}</p>
                  </div>
                </div>
                <p className="text-gray-700">{comment.content}</p>
              </div>
            ))}
            
            
          </div>
        </div>
        
        {/* Author Section */}
        <div className="md:w-1/3 ">
          <div className="sticky top-36 bg-gray-50 rounded-xl p-6">
            <div className="flex items-center mb-4">
              <img 
                src={post.author.avatar} 
                alt={post.author.name} 
                className="w-12 h-12 rounded-full mr-3"
              />
              <h3 className="font-bold text-lg">{post.author.name}</h3>
            </div>
            <div className="text-gray-700 whitespace-pre-line">
              {post.author.bio}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;