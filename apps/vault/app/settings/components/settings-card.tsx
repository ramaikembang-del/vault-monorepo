import React from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

interface SettingsCardProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  collapsible?: boolean;
  defaultExpanded?: boolean;
  icon?: React.ReactNode;
  badge?: string;
}

export function SettingsCard({
  title,
  description,
  children,
  collapsible = false,
  defaultExpanded = true,
  icon,
  badge,
}: SettingsCardProps) {
  const [isExpanded, setIsExpanded] = React.useState(defaultExpanded);

  return (
    <Card className="p-6 mb-4">
      <div
        className={cn(
          "flex items-start justify-between mb-4",
          collapsible && "cursor-pointer"
        )}
        onClick={() => collapsible && setIsExpanded(!isExpanded)}
      >
        <div className="flex-1">
          <div className="flex items-center gap-2">
            {icon && <div className="text-primary">{icon}</div>}
            <h3 className="text-lg font-semibold">{title}</h3>
            {badge && (
              <span className="px-2 py-0.5 text-xs font-medium bg-primary/10 text-primary rounded-full">
                {badge}
              </span>
            )}
          </div>
          {description && (
            <p className="text-sm text-muted-foreground mt-1">{description}</p>
          )}
        </div>
        {collapsible && (
          <ChevronDown
            className={cn(
              "w-5 h-5 text-muted-foreground transition-transform",
              isExpanded ? "rotate-0" : "-rotate-90"
            )}
          />
        )}
      </div>

      {isExpanded && <div className="space-y-4">{children}</div>}
    </Card>
  );
}

interface SettingRowProps {
  label: string;
  description?: string;
  children: React.ReactNode;
  badge?: string;
}

export function SettingRow({
  label,
  description,
  children,
  badge,
}: SettingRowProps) {
  return (
    <div className="flex items-center justify-between py-3 border-b last:border-b-0">
      <div className="flex-1 mr-4">
        <div className="flex items-center gap-2">
          <label className="text-sm font-medium">{label}</label>
          {badge && (
            <span className="px-2 py-0.5 text-xs font-medium bg-muted text-muted-foreground rounded-full">
              {badge}
            </span>
          )}
        </div>
        {description && (
          <p className="text-xs text-muted-foreground mt-1">{description}</p>
        )}
      </div>
      <div className="flex-shrink-0">{children}</div>
    </div>
  );
}
