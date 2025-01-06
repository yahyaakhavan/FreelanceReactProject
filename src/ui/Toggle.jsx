/* eslint-disable react/prop-types */
import { Switch } from "@headlessui/react";

export default function Toggle({ onChange, label, enabled }) {
  return (
    <div className="flex items-center gap-x-2">
      <label>{label}</label>
      <Switch
        checked={enabled}
        onChange={onChange}
        className="group inline-flex h-6 w-11 items-center rounded-full bg-secondary-200 transition data-[checked]:bg-primary-900"
      >
        <span className="size-4 -translate-x-1 rounded-full bg-secondary-0 transition group-data-[checked]:-translate-x-6" />
      </Switch>
    </div>
  );
}
