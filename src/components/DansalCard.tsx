import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
interface ContactInfoProps {
  name: string;
  oranization: string;
  date: string;
  location: string;
  startingTime: string;
  amOrpm: string;
  isOpen: boolean;
  numberOfPeopple: number;
}

export const DansalCard: React.FC<ContactInfoProps> = ({
  name,
  oranization,
  date,
  location,
  startingTime,
  amOrpm,
  isOpen,
}) => {
  return (
    <Card className="w-[330px]">
      <CardHeader>
        <CardTitle>{name}🍛</CardTitle>
        <CardDescription>Organized by {oranization}</CardDescription>
      </CardHeader>
      <CardContent>
        <div>
          <div className="grid w-full items-center gap-4">
            <div className="mb-3">
              <div className="bg-gray-200 p-4 text-center h-24 mb-5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg"></div>
              <p className="text-lg font-semibold leading-none tracking-tight mb-1">
                Date
              </p>
              <p className="text-sm text-slate-400 font-normal leading-none tracking-tight">
                {date} th May
              </p>
            </div>
            <div className="mb-3">
              <p className="text-lg font-semibold leading-none tracking-tight mb-1">
                Start at
              </p>
              <p className="text-sm text-slate-400 font-normal leading-none tracking-tight">
                {startingTime} {amOrpm}
              </p>
            </div>
            <div className="mb-3">
              <p className="text-lg font-semibold leading-none tracking-tight mb-1">
                Location
              </p>
              <p className="text-sm text-slate-400 font-normal leading-none tracking-tight">
                {location}
              </p>
            </div>
            <div className="mb-3">
              {isOpen == true ? (
                <Badge className="mr-2">Started</Badge>
              ) : (
                <Badge variant="destructive" className="mr-2">
                  Yet to Start
                </Badge>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
