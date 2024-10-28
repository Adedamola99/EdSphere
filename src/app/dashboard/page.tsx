'use client'
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPoll, faLightbulb, faCog } from "@fortawesome/free-solid-svg-icons";

// Example Poll Data
const pollsData = [
  {
    id: 1,
    question: "What's your favorite programming language?",
    options: ["JavaScript", "Python", "C++", "Java"],
    votes: [20, 35, 5, 10],
    expiresAt: new Date().getTime() + 86400000, // 24 hours from now
  },
  {
    id: 2,
    question: "What's the best time to study?",
    options: ["Morning", "Afternoon", "Evening", "Night"],
    votes: [15, 25, 10, 30],
    expiresAt: new Date().getTime() + 86400000,
  },
];

// Example Tips Data
const tipsData = [
  { id: 1, content: "Use Pomodoro Technique for effective time management." },
  { id: 2, content: "Review your notes after every class for better retention." },
];

// Feed Customization Options
const feedOptions = ["Polls", "Tips"];

const FeedPage = () => {
  const [polls, setPolls] = useState(pollsData);
  const [tips, setTips] = useState(tipsData);
  const [feedPreferences, setFeedPreferences] = useState(feedOptions);

  const handleVote = (pollId: number, optionIndex: number) => {
    setPolls((prevPolls) =>
      prevPolls.map((poll) =>
        poll.id === pollId
          ? {
              ...poll,
              votes: poll.votes.map((vote, index) =>
                index === optionIndex ? vote + 1 : vote
              ),
            }
          : poll
      )
    );
  };

  const toggleFeedOption = (option: string) => {
    setFeedPreferences((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  return (
    <div className="container mx-auto p-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Feed</h1>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => toggleFeedOption("Polls")}
            className={`px-4 py-2 border rounded ${
              feedPreferences.includes("Polls")
                ? "bg-blue-500 text-white"
                : "bg-gray-100"
            }`}
          >
            <FontAwesomeIcon icon={faPoll} className="mr-2" />
            Polls
          </button>
          <button
            onClick={() => toggleFeedOption("Tips")}
            className={`px-4 py-2 border rounded ${
              feedPreferences.includes("Tips")
                ? "bg-blue-500 text-white"
                : "bg-gray-100"
            }`}
          >
            <FontAwesomeIcon icon={faLightbulb} className="mr-2" />
            Tips
          </button>
        </div>
      </div>

      {/* Feed Content */}
      <div className="space-y-6">
        {/* Polls */}
        {feedPreferences.includes("Polls") && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Polls</h2>
            {polls.map((poll) => (
              <div key={poll.id} className="bg-white p-4 rounded-lg shadow-md mb-4">
                <p className="text-lg font-bold">{poll.question}</p>
                <div className="mt-3 space-y-2">
                  {poll.options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleVote(poll.id, index)}
                      className="w-full flex justify-between items-center bg-gray-100 p-2 rounded-md hover:bg-gray-200"
                    >
                      <span>{option}</span>
                      <span>{poll.votes[index]} votes</span>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tips */}
        {feedPreferences.includes("Tips") && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Study Tips</h2>
            {tips.map((tip) => (
              <div
                key={tip.id}
                className="bg-white p-4 rounded-lg shadow-md mb-4"
              >
                <p className="text-gray-700">{tip.content}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FeedPage;
