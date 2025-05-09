import { useState } from 'react';
import { ChatBubbleLeftRightIcon, XMarkIcon } from '@heroicons/react/24/outline';

function LiveChat() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 p-4 bg-primary-600 text-white rounded-full shadow-lg hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 z-40"
      >
        <ChatBubbleLeftRightIcon className="h-6 w-6" />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 h-[32rem] bg-white rounded-lg shadow-xl z-50 flex flex-col">
          {/* Chat Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <h3 className="text-lg font-semibold text-gray-900">Live Chat</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-gray-500 focus:outline-none"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 p-4 overflow-y-auto">
            <div className="space-y-4">
              {/* Welcome Message */}
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="h-8 w-8 rounded-full bg-primary-600 flex items-center justify-center">
                    <span className="text-white text-sm font-medium">L</span>
                  </div>
                </div>
                <div className="ml-3">
                  <div className="text-sm font-medium text-gray-900">Legal Assistant</div>
                  <div className="mt-1 text-sm text-gray-700 bg-gray-100 rounded-lg p-3">
                    Welcome to our law firm! How can I assist you today?
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Chat Input */}
          <div className="p-4 border-t">
            <form className="flex space-x-3">
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 min-w-0 rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
              />
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default LiveChat; 