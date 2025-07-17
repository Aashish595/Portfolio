import { Trophy, Target, Code, Award } from "lucide-react";

const dsaStats = [
  { platform: "LeetCode", solved: 450, total: 2500, rank: "Guardian", icon: <Code /> },
  { platform: "GeeksforGeeks", solved: 320, total: 1500, rank: "Expert", icon: <Target /> },
  { platform: "HackerRank", solved: 280, total: 800, rank: "5 Star", icon: <Trophy /> },
  { platform: "CodeChef", solved: 150, total: 500, rank: "4 Star", icon: <Award /> },
];

const algorithms = [
  "Dynamic Programming", "Graph Algorithms", "Tree Traversals", "Sorting & Searching",
  "Greedy Algorithms", "Backtracking", "Divide & Conquer", "String Algorithms",
  "Bit Manipulation", "Two Pointers", "Sliding Window", "Binary Search",
];

const dataStructures = [
  "Arrays & Strings", "Linked Lists", "Stacks & Queues", "Trees & BST",
  "Heaps", "Hash Tables", "Graphs", "Tries", "Segment Trees", "Disjoint Set",
];

const StatCard = ({ platform, solved, total, rank, icon }) => (
  <div className="p-4 sm:p-6 text-center transition-all hover:-translate-y-1 bg-white dark:bg-gray-800 shadow-md hover:shadow-lg rounded-xl">
    <div className="flex justify-center mb-2 text-blue-600 dark:text-blue-400">{icon}</div>
    <h3 className="text-lg font-bold mb-2">{platform}</h3>
    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{solved}</div>
    <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">out of {total} problems</p>
    <span className="inline-block bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-2 py-0.5 rounded-full text-xs mb-2">
      {rank}
    </span>
    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
      <div 
        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full" 
        style={{ width: `${(solved / total) * 100}%` }}
      />
    </div>
  </div>
);

const TagCloud = ({ items, color }) => (
  <div className="flex flex-wrap gap-2">
    {items.map(item => (
      <span key={item} className={`px-2 py-1 rounded-full text-xs font-medium
        ${color === 'blue' ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-900/50' : 
          'bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 hover:bg-purple-200 dark:hover:bg-purple-900/50'}`}>
        {item}
      </span>
    ))}
  </div>
);

const Achievement = ({ value, label }) => (
  <div>
    <div className="text-xl sm:text-2xl font-bold text-orange-600 dark:text-orange-400">{value}</div>
    <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{label}</div>
  </div>
);

export default function DSASection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-800">
      <div className="container px-4 sm:px-6 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">DSA & Problem Solving</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My journey in competitive programming and algorithmic problem solving
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {dsaStats.map(stat => <StatCard key={stat.platform} {...stat} />)}
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mb-12">
          <div className="p-4 sm:p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl shadow-lg">
            <h3 className="text-lg sm:text-xl font-bold mb-3 flex items-center">
              <Code className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-blue-600 dark:text-blue-400" />
              Key Algorithms Mastered
            </h3>
            <TagCloud items={algorithms} color="blue" />
          </div>

          <div className="p-4 sm:p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl shadow-lg">
            <h3 className="text-lg sm:text-xl font-bold mb-3 flex items-center">
              <Target className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-purple-600 dark:text-purple-400" />
              Data Structures Expertise
            </h3>
            <TagCloud items={dataStructures} color="purple" />
          </div>
        </div>

        <div className="p-6 sm:p-8 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-xl shadow-lg">
          <h3 className="text-lg sm:text-xl font-bold mb-4">🏆 Recent Achievements</h3>
          <div className="grid grid-cols-3 gap-2 sm:gap-4">
            <Achievement value="Top 5%" label="LeetCode Weekly Contest" />
            <Achievement value="1200+" label="Total Problems Solved" />
            <Achievement value="Expert" label="Average Rating" />
          </div>
        </div>
      </div>
    </section>
  );
}