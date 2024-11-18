import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@radix-ui/react-dropdown-menu";

export default function HeaderTabs({
  position,
  setPosition,
}: {
  position: string;
  setPosition: (value: string) => void;
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="text-sm font-medium text-primary/55 inline-flex items-center gap-1">
        <span>More</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="7"
          height="3"
          fill="none"
        >
          <path fill="#1E1E1E" fillOpacity=".5" d="M3.5 3 0 0h7L3.5 3Z" />
        </svg>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem
            value="home"
            className="text-sm text-primary/55 px-4 py-2"
          >
            Home
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem
            value="score"
            className="text-sm text-primary/55 px-4 py-2"
          >
            Score
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem
            value="results"
            className="text-sm text-primary/55 px-4 py-2"
          >
            Results
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem
            value="stats"
            className="text-sm text-primary/55 px-4 py-2"
          >
            Stats
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem
            value="teams"
            className="text-sm text-primary/55 px-4 py-2"
          >
            Teams
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
