/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";
import FormFields from "@/components/form-fields/form-fields";
import { Button } from "@/components/ui/button";
import { Pages } from "@/constants/enums";
import useFormFields from "@/Hooks/useFormFields";
interface TranslationType {
  formFields?: {
    // Add your actual form field types here
    [key: string]: any;
  };
  // Other translation types
}
export default function ProfileForm({ t }: { t: TranslationType }) {
  const { getFormFields } = useFormFields({ slug: Pages.PROFILE, t });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Profile updated");
  };

  const profileFields = getFormFields().slice(0, 4);
  const passwordFields = getFormFields().slice(4);

  return (
    <div className="w-full lg:w-3/4">
      <h2 className="text-2xl font-bold text-secondary mb-6">
        Edit Your Profile
      </h2>
      <form onSubmit={handleSubmit} className="_statespace-y-6">
        {/* Profile Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {profileFields.map((field) => (
            <div key={field.name}>
              <FormFields {...field} />
            </div>
          ))}
        </div>

        {/* Password Fields */}
        <div className="space-y-6 mt-6">
          <h3 className="text-lg font-semibold">Password Changes</h3>
          {passwordFields.map((field) => (
            <div key={field.name}>
              <FormFields {...field} />
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-4 mt-6">
          <Button
            type="button"
            className="px-6 py-2 bg-transparent text-black border border-gray-300 rounded-md hover:bg-gray-100"
          >
            Cancel
          </Button>
          <Button
            type="submit"
            className="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
          >
            Save Changes
          </Button>
        </div>
      </form>
    </div>
  );
}
