import React from 'react';

export default function Skeleton() {
  return (
    <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
      <div className="flex w-full flex-col gap-4">
        <div className="h-80 w-full rounded-md bg-gray-100" />
        <div className="flex w-full justify-between">
          <div className="h-8 w-36 rounded-md bg-gray-100" />
          <div className="ml-auto h-8 w-16 rounded-md bg-gray-100" />
          <div className="" />
        </div>
        <div className="h-4 w-full rounded-md bg-gray-100" />
        <div className="h-4 w-1/2 rounded-md bg-gray-100" />
      </div>
      <div className="flex w-full flex-col gap-4">
        <div className="h-80 w-full rounded-md bg-gray-100" />
        <div className="flex w-full justify-between">
          <div className="h-8 w-36 rounded-md bg-gray-100" />
          <div className="ml-auto h-8 w-16 rounded-md bg-gray-100" />
          <div className="" />
        </div>
        <div className="h-4 w-full rounded-md bg-gray-100" />
        <div className="h-4 w-1/2 rounded-md bg-gray-100" />
      </div>
      <div className="flex w-full flex-col gap-4">
        <div className="h-80 w-full rounded-md bg-gray-100" />
        <div className="flex w-full justify-between">
          <div className="h-8 w-36 rounded-md bg-gray-100" />
          <div className="ml-auto h-8 w-16 rounded-md bg-gray-100" />
          <div className="" />
        </div>
        <div className="h-4 w-full rounded-md bg-gray-100" />
        <div className="h-4 w-1/2 rounded-md bg-gray-100" />
      </div>
    </div>
  );
}
