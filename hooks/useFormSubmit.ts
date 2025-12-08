"use client";

import { useState, useCallback } from "react";
import type { FormType } from "@/lib/supabase";

interface UseFormSubmitOptions {
  /** Callback after successful submission */
  onSuccess?: () => void;
  /** Callback on error */
  onError?: (error: Error) => void;
  /** Reset form data after submission */
  resetOnSuccess?: boolean;
}

interface UseFormSubmitResult<T> {
  isSubmitting: boolean;
  submitted: boolean;
  error: Error | null;
  submit: (data: T) => Promise<void>;
  reset: () => void;
}

/**
 * Generic form submission hook for handling API calls
 */
export function useFormSubmit<T>(
  formType: FormType,
  options: UseFormSubmitOptions = {}
): UseFormSubmitResult<T> {
  const { onSuccess, onError } = options;

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const submit = useCallback(
    async (data: T) => {
      setIsSubmitting(true);
      setError(null);

      try {
        const response = await fetch("/api/submit-form", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ type: formType, data }),
        });

        if (!response.ok) {
          throw new Error("Failed to submit form");
        }

        setSubmitted(true);
        onSuccess?.();
      } catch (err) {
        const error = err instanceof Error ? err : new Error("Unknown error");
        setError(error);
        onError?.(error);
        console.error("Form submission error:", error);
      } finally {
        setIsSubmitting(false);
      }
    },
    [formType, onSuccess, onError]
  );

  const reset = useCallback(() => {
    setSubmitted(false);
    setError(null);
  }, []);

  return {
    isSubmitting,
    submitted,
    error,
    submit,
    reset,
  };
}
