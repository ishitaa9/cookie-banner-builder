// src/styles/configFormStyles.ts
export const formWrapper = `
  bg-white shadow-xl rounded-2xl px-8 py-10 max-w-xl w-full mx-auto
`;

export const heading = `
  text-3xl font-bold text-gray-900 mb-8 text-center
`;

export const formLayout = `
  flex flex-col gap-6
`;

export const formGroup = `
  flex flex-col gap-2
`;

export const label = `
  text-sm font-medium text-gray-700
`;

export const input = `
  border border-gray-300 rounded-md px-4 py-2 text-sm
  focus:outline-none focus:ring-2 focus:ring-indigo-500 transition
`;

export const textarea = `
  ${input} resize-none min-h-[100px]
`;

export const colorInput = `
  w-16 h-10 p-0 border border-gray-300 rounded cursor-pointer
`;
