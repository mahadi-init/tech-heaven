import { Search, ShoppingBag, UserRound } from "lucide-react";
import { title } from "process";

const options = [
  {
    title: "New Arrials",
    url: "",
  },
  {
    title: "Best Sellers",
    url: "",
  },

  {
    title: "Deals",
    url: "",
  },
  {
    title: "Support",
    url: "",
  },
];

export default function Header() {
  return (
    <div className="flex justify-between items-center w-full py-4 border-b border-gray-200 px-12">
      <p className="font-semibold text-lg">Tech Heaven</p>

      <div className="flex items-center gap-12">
        <div className="flex gap-12">
          {options.map((item) => (
            <p key={item.title} className="font-medium">
              {item.title}
            </p>
          ))}
        </div>

        <div className="flex gap-6">
          <Search size={36} className="p-2 bg-gray-100 rounded-md" />
          <UserRound size={36} className="p-2 bg-gray-100 rounded-md" />
          <ShoppingBag size={36} className="p-2 bg-gray-100 rounded-md" />
        </div>
      </div>
    </div>
  );
}
