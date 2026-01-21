import React from "react";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

// Toggle Switch Component
interface ToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
}

export function Toggle({ checked, onChange, disabled = false }: ToggleProps) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      onClick={() => onChange(!checked)}
      className={cn(
        "relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2",
        checked ? "bg-primary" : "bg-muted",
        disabled && "opacity-50 cursor-not-allowed"
      )}
    >
      <span
        className={cn(
          "inline-block h-4 w-4 transform rounded-full bg-white shadow-lg transition-transform",
          checked ? "translate-x-6" : "translate-x-1"
        )}
      />
    </button>
  );
}

// Select Dropdown Component
interface SelectProps {
  value: string;
  onChange: (value: string) => void;
  options: Array<{ value: string; label: string }>;
  disabled?: boolean;
  className?: string;
}

export function Select({
  value,
  onChange,
  options,
  disabled = false,
  className,
}: SelectProps) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      disabled={disabled}
      className={cn(
        "px-3 py-2 rounded-lg border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/50",
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

// Slider Component
interface SliderProps {
  value: number;
  onChange: (value: number) => void;
  min: number;
  max: number;
  step?: number;
  disabled?: boolean;
  showValue?: boolean;
  unit?: string;
}

export function Slider({
  value,
  onChange,
  min,
  max,
  step = 1,
  disabled = false,
  showValue = true,
  unit = "",
}: SliderProps) {
  return (
    <div className="flex items-center gap-3">
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        disabled={disabled}
        className={cn(
          "flex-1 h-2 bg-muted rounded-lg appearance-none cursor-pointer",
          "[&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary",
          "[&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-primary [&::-moz-range-thumb]:border-0",
          disabled && "opacity-50 cursor-not-allowed"
        )}
      />
      {showValue && (
        <span className="text-sm font-medium w-16 text-right">
          {value}
          {unit}
        </span>
      )}
    </div>
  );
}

// Number Input Component
interface NumberInputProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
  unit?: string;
  className?: string;
}

export function NumberInput({
  value,
  onChange,
  min,
  max,
  step = 1,
  disabled = false,
  unit = "",
  className,
}: NumberInputProps) {
  return (
    <div className="flex items-center gap-2">
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        min={min}
        max={max}
        step={step}
        disabled={disabled}
        className={cn(
          "w-20 px-3 py-2 rounded-lg border bg-background text-sm text-right focus:outline-none focus:ring-2 focus:ring-primary/50",
          disabled && "opacity-50 cursor-not-allowed",
          className
        )}
      />
      {unit && <span className="text-sm text-muted-foreground">{unit}</span>}
    </div>
  );
}

// Checkbox Component
interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  disabled?: boolean;
}

export function Checkbox({
  checked,
  onChange,
  label,
  disabled = false,
}: CheckboxProps) {
  return (
    <label className="flex items-center gap-2 cursor-pointer">
      <div
        className={cn(
          "w-5 h-5 rounded border-2 flex items-center justify-center transition-colors",
          checked
            ? "bg-primary border-primary"
            : "border-muted-foreground/30 bg-background",
          disabled && "opacity-50 cursor-not-allowed"
        )}
        onClick={() => !disabled && onChange(!checked)}
      >
        {checked && <Check className="w-3 h-3 text-primary-foreground" />}
      </div>
      {label && (
        <span className="text-sm select-none">{label}</span>
      )}
    </label>
  );
}

// Text Input Component
interface TextInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}

export function TextInput({
  value,
  onChange,
  placeholder,
  disabled = false,
  className,
}: TextInputProps) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      disabled={disabled}
      className={cn(
        "w-full px-3 py-2 rounded-lg border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/50",
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
    />
  );
}

// Radio Group Component
interface RadioOption {
  value: string;
  label: string;
  description?: string;
}

interface RadioGroupProps {
  value: string;
  onChange: (value: string) => void;
  options: RadioOption[];
  disabled?: boolean;
}

export function RadioGroup({
  value,
  onChange,
  options,
  disabled = false,
}: RadioGroupProps) {
  return (
    <div className="space-y-2">
      {options.map((option) => (
        <label
          key={option.value}
          className={cn(
            "flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-colors",
            value === option.value
              ? "border-primary bg-primary/5"
              : "border-border hover:border-primary/50",
            disabled && "opacity-50 cursor-not-allowed"
          )}
        >
          <div className="flex items-center h-5">
            <div
              className={cn(
                "w-4 h-4 rounded-full border-2 flex items-center justify-center",
                value === option.value
                  ? "border-primary"
                  : "border-muted-foreground/30"
              )}
              onClick={() => !disabled && onChange(option.value)}
            >
              {value === option.value && (
                <div className="w-2 h-2 rounded-full bg-primary" />
              )}
            </div>
          </div>
          <div className="flex-1">
            <div className="text-sm font-medium">{option.label}</div>
            {option.description && (
              <div className="text-xs text-muted-foreground mt-1">
                {option.description}
              </div>
            )}
          </div>
        </label>
      ))}
    </div>
  );
}
