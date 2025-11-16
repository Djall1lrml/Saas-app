import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/src/components/ui/table";
import { cn } from "@/src/lib/utils";
import Link from "next/link";
import Image from "next/image";

// Define the Companion type (adjust as needed)
export interface Companion {
  id: string;
  name: string;
  topic: string;
  subject: string;
  color: string;
  duration: number;
}

interface CompanionsListProps {
  title?: string;
  companions?: Companion[];
  className?: string;
}

const CompanionsList = ({
  title = "Recent Sessions",
  companions = [],
  className,
}: CompanionsListProps) => {
  const hasCompanions = companions.length > 0;

  return (
    <article className={cn("companion-list", className)}>
      <h2 className="font-bold text-3xl mb-4">{title}</h2>

      {hasCompanions ? (
        <Table>
          <TableCaption className="sr-only">
            List of recent companion sessions
          </TableCaption>

          <TableHeader>
            <TableRow>
              <TableHead className="text-lg w-2/3">Lesson</TableHead>
              <TableHead className="text-lg">Subject</TableHead>
              <TableHead className="text-lg text-right">Duration</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {companions.map((companion, index) => (
              <TableRow
                key={`${companion.id}-${index}`} // unique key for each row
                className="hover:bg-muted/50 transition-colors"
              >
                <TableCell className="font-medium">
                  <Link
                    href={`/companions/${companion.id}`}
                    className="flex items-center gap-3 hover:underline focus:outline-none focus:underline"
                  >
                    {/* Desktop: Icon + Text */}
                    <div
                      className="hidden md:flex size-[72px] items-center justify-center rounded-lg flex-shrink-0"
                      style={{ backgroundColor: companion.color }}
                    >
                      <Image
                        src={`/icons/${companion.subject}.svg`}
                        alt={companion.subject}
                        width={35}
                        height={35}
                      />
                    </div>

                    <div className="flex flex-col gap-1">
                      <p className="font-bold text-2xl text-foreground">
                        {companion.name}
                      </p>
                      <p className="text-lg text-muted-foreground">
                        {companion.topic}
                      </p>
                    </div>
                  </Link>
                </TableCell>

                <TableCell>
                  {/* Desktop: Badge */}
                  <div className="hidden md:block subject-badge w-fit">
                    <p className="text-lg font-medium">{companion.subject}</p>
                  </div>

                  {/* Mobile: Colored Icon */}
                  <div
                    className="flex md:hidden items-center justify-center rounded-lg p-2"
                    style={{ backgroundColor: companion.color }}
                  >
                    <Image
                      src={`/icons/${companion.subject}.svg`}
                      alt={companion.subject}
                      width={18}
                      height={18}
                    />
                  </div>
                </TableCell>

                <TableCell className="text-right font-medium text-lg">
                  <div className="flex items-center justify-end gap-2">
                    <p className="text-2xl">
                      {companion.duration}
                      <span className="hidden md:inline ml-1">mins</span>
                    </p>
                    <Image
                      src="/icons/clock.svg"
                      width={15}
                      height={15}
                      alt="minutes"
                      className="md:hidden"
                    />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <div className="text-center py-12 text-muted-foreground">
          <p className="text-lg">No sessions yet. Start your first lesson!</p>
        </div>
      )}
    </article>
  );
};

export default CompanionsList;
