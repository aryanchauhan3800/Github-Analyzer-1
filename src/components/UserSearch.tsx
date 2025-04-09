import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface Props {
  onSearch: (username: string) => void;
}

export function UserSearch({ onSearch }: Props) {
  const [username, setUsername] = useState("");

  return (
    <div className="flex gap-2 items-center bg-black p-4 rounded-lg">
      <Input
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="bg-black text-white border border-white placeholder-gray-400 focus:outline-none focus:ring-0 focus:border-white"
      />
      <Button className="bg-white text-black hover:bg-gray-200" onClick={() => onSearch(username)}>
        Search
      </Button>
    </div>
  );
}
