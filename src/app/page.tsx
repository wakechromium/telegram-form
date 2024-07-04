'use client'

import { useRef, useEffect } from 'react'
import { IoCheckmark } from 'react-icons/io5'

const isBrowser = typeof window !== 'undefined'

export default function Home() {
  const stepperRef = useRef(null)

  useEffect(() => {
    if (!stepperRef.current || !isBrowser) return

    import('preline/preline').then(({ HSStepper }) => {
      HSStepper.autoInit()

      // const stepper = new HSStepper(stepperRef.current!)

      // console.log(stepper)
    })
  }, [])

  return (
    <main className="py-4">
      <form
        data-hs-stepper
        ref={stepperRef}
        className="mx-auto max-w-3xl rounded-lg border border-gray-200 p-4 dark:border-neutral-700"
      >
        <ul className="relative mx-auto flex max-w-md flex-row gap-x-2">
          <li
            className="group flex flex-1 shrink basis-0 items-center gap-x-2"
            data-hs-stepper-nav-item='{"index": 1}'
          >
            <span className="group inline-flex min-h-7 min-w-7 items-center align-middle text-xs">
              <span className="flex size-7 flex-shrink-0 items-center justify-center rounded-full bg-gray-100 font-medium text-gray-800 group-focus:bg-gray-200 hs-stepper-active:bg-blue-600 hs-stepper-active:text-white hs-stepper-success:bg-blue-600 hs-stepper-success:text-white hs-stepper-completed:bg-teal-500 hs-stepper-completed:group-focus:bg-teal-600 dark:bg-neutral-700 dark:text-white dark:group-focus:bg-gray-600 dark:hs-stepper-active:bg-blue-500 dark:hs-stepper-success:bg-blue-500 dark:hs-stepper-completed:bg-teal-500 dark:hs-stepper-completed:group-focus:bg-teal-600">
                <span className="hs-stepper-success:hidden hs-stepper-completed:hidden">
                  1
                </span>
                <IoCheckmark className="hidden size-3 flex-shrink-0 hs-stepper-success:block" />
              </span>
              <span className="ms-2 text-sm font-medium text-gray-800 dark:text-neutral-200">
                Login Info
              </span>
            </span>
            <div className="h-px w-full flex-1 bg-gray-200 group-last:hidden hs-stepper-success:bg-blue-600 hs-stepper-completed:bg-teal-600 dark:bg-neutral-700 dark:hs-stepper-success:bg-blue-600 dark:hs-stepper-completed:bg-teal-600" />
          </li>

          <li
            className="group flex flex-1 shrink basis-0 items-center gap-x-2"
            data-hs-stepper-nav-item='{"index": 2}'
          >
            <span className="group inline-flex min-h-7 min-w-7 items-center align-middle text-xs">
              <span className="flex size-7 flex-shrink-0 items-center justify-center rounded-full bg-gray-100 font-medium text-gray-800 group-focus:bg-gray-200 hs-stepper-active:bg-blue-600 hs-stepper-active:text-white hs-stepper-success:bg-blue-600 hs-stepper-success:text-white hs-stepper-completed:bg-teal-500 hs-stepper-completed:group-focus:bg-teal-600 dark:bg-neutral-700 dark:text-white dark:group-focus:bg-gray-600 dark:hs-stepper-active:bg-blue-500 dark:hs-stepper-success:bg-blue-500 dark:hs-stepper-completed:bg-teal-500 dark:hs-stepper-completed:group-focus:bg-teal-600">
                <span className="hs-stepper-success:hidden hs-stepper-completed:hidden">
                  2
                </span>
                <IoCheckmark className="hidden size-3 flex-shrink-0 hs-stepper-success:block" />
              </span>
              <span className="ms-2 text-sm font-medium text-gray-800 dark:text-neutral-200">
                Card Info
              </span>
            </span>
            <div className="h-px w-full flex-1 bg-gray-200 group-last:hidden hs-stepper-success:bg-blue-600 hs-stepper-completed:bg-teal-600 dark:bg-neutral-700 dark:hs-stepper-success:bg-blue-600 dark:hs-stepper-completed:bg-teal-600" />
          </li>

          <li
            className="group flex flex-1 shrink basis-0 items-center gap-x-2"
            data-hs-stepper-nav-item='{"index": 3}'
          >
            <span className="group inline-flex min-h-7 min-w-7 items-center align-middle text-xs">
              <span className="flex size-7 flex-shrink-0 items-center justify-center rounded-full bg-gray-100 font-medium text-gray-800 group-focus:bg-gray-200 hs-stepper-active:bg-blue-600 hs-stepper-active:text-white hs-stepper-success:bg-blue-600 hs-stepper-success:text-white hs-stepper-completed:bg-teal-500 hs-stepper-completed:group-focus:bg-teal-600 dark:bg-neutral-700 dark:text-white dark:group-focus:bg-gray-600 dark:hs-stepper-active:bg-blue-500 dark:hs-stepper-success:bg-blue-500 dark:hs-stepper-completed:bg-teal-500 dark:hs-stepper-completed:group-focus:bg-teal-600">
                <span className="hs-stepper-success:hidden hs-stepper-completed:hidden">
                  3
                </span>
                <IoCheckmark className="hidden size-3 flex-shrink-0 hs-stepper-success:block" />
              </span>
              <span className="ms-2 text-sm font-medium text-gray-800 dark:text-neutral-200">
                Step
              </span>
            </span>
            <div className="h-px w-full flex-1 bg-gray-200 group-last:hidden hs-stepper-success:bg-blue-600 hs-stepper-completed:bg-teal-600 dark:bg-neutral-700 dark:hs-stepper-success:bg-blue-600 dark:hs-stepper-completed:bg-teal-600" />
          </li>
        </ul>

        <div className="mt-5 sm:mt-8">
          <div data-hs-stepper-content-item='{"index": 1}'>
            <div className="mx-auto flex max-w-md flex-col gap-4">
              <div className="min-w-full">
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium dark:text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="block w-full rounded-lg border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                />
              </div>

              <div className="min-w-full">
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-medium dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="block w-full rounded-lg border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                />
              </div>
            </div>
          </div>

          <div
            data-hs-stepper-content-item='{"index": 2}'
            style={{ display: 'none' }}
          >
            <div className="mx-auto flex max-w-md flex-col gap-4">
              <div className="min-w-full">
                <label
                  htmlFor="number"
                  className="mb-2 block text-sm font-medium dark:text-white"
                >
                  Card Info
                </label>
                <input
                  type="text"
                  id="number"
                  name="number"
                  placeholder="xxxx-xxxx-xxxx-xxxx"
                  className="block w-full rounded-lg border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                />
              </div>

              <div className="flex min-w-full gap-2">
                <div className="w-1/2">
                  <label
                    htmlFor="expiry"
                    className="mb-2 block text-sm font-medium dark:text-white"
                  >
                    Expiry
                  </label>
                  <input
                    type="text"
                    id="expiry"
                    name="expiry"
                    placeholder="MM/YYYY"
                    className="block w-full rounded-lg border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                  />
                </div>
                <div className="w-1/2">
                  <label
                    htmlFor="cvv"
                    className="mb-2 block text-sm font-medium dark:text-white"
                  >
                    CVV
                  </label>
                  <input
                    type="text"
                    id="cvv"
                    name="cvv"
                    className="block w-full rounded-lg border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            data-hs-stepper-content-item='{"index": 3}'
            style={{ display: 'none' }}
          >
            <div className="mx-auto flex max-w-md flex-col gap-4">
              <div className="min-w-full">
                <label
                  htmlFor="address"
                  className="mb-2 block text-sm font-medium dark:text-white"
                >
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  className="block w-full rounded-lg border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                />
              </div>
              <div className="min-w-full">
                <label
                  htmlFor="ssn"
                  className="mb-2 block text-sm font-medium dark:text-white"
                >
                  SSN
                </label>
                <input
                  type="text"
                  id="ssn"
                  name="ssn"
                  className="block w-full rounded-lg border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                />
              </div>
              <div className="min-w-full">
                <label
                  htmlFor="dob"
                  className="mb-2 block text-sm font-medium dark:text-white"
                >
                  Date of Birth
                </label>
                <input
                  type="date"
                  id="dob"
                  name="dob"
                  className="block w-full rounded-lg border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                />
              </div>
              <div className="min-w-full">
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-medium dark:text-white"
                >
                  Phone
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  className="block w-full rounded-lg border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                />
              </div>
            </div>
          </div>

          <div className="mt-5 flex items-center justify-between gap-x-2">
            <button
              type="button"
              className="inline-flex items-center gap-x-1 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-800 shadow-sm hover:bg-gray-50 disabled:pointer-events-none disabled:opacity-50"
              data-hs-stepper-back-btn
            >
              Back
            </button>
            <button
              type="button"
              className="inline-flex items-center gap-x-1 rounded-lg border border-transparent bg-blue-600 px-3 py-2 text-sm font-semibold text-white hover:bg-blue-700 disabled:pointer-events-none disabled:opacity-50"
              data-hs-stepper-next-btn
            >
              Next
            </button>
            <button
              type="button"
              className="inline-flex items-center gap-x-1 rounded-lg border border-transparent bg-blue-600 px-3 py-2 text-sm font-semibold text-white hover:bg-blue-700 disabled:pointer-events-none disabled:opacity-50"
              data-hs-stepper-finish-btn
              style={{ display: 'none' }}
            >
              Finish
            </button>
            <button
              type="reset"
              className="inline-flex items-center gap-x-1 rounded-lg border border-transparent bg-blue-600 px-3 py-2 text-sm font-semibold text-white hover:bg-blue-700 disabled:pointer-events-none disabled:opacity-50"
              data-hs-stepper-reset-btn
              style={{ display: 'none' }}
            >
              Reset
            </button>
          </div>
        </div>
      </form>
    </main>
  )
}
