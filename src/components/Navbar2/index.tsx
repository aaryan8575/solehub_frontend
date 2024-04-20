"use client"
import React, { useState } from "react"

const Navbar2 = ({ options }) => {
  const [openMenu, setOpenMenu] = useState(null)

  const toggleMenu = (index) => {
    setOpenMenu(openMenu === index ? null : index)
  }

  return (
    <div className="flex justify-between">
      {options.map((option, index) => (
        <div
          key={index}
          className="relative bg-blue-200 gap-4 inline-block text-left"
        >
          <div>
            <button
              type="button"
              className="flex  w-full justify-center items-center text-sm font-semibold text-gray-900 hover:bg-gray-50"
              id={`menu-button-${index}`}
              aria-expanded={openMenu === index}
              aria-haspopup="true"
              onClick={() => toggleMenu(index)}
            >
              {option.label}
              <svg
                className="-mr-1 h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          {openMenu === index && (
            <div className="absolute z-10 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1" role="none">
                {option.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    href={item.link}
                    className="text-gray-700 block px-4 py-2 text-sm"
                    role="menuitem"
                    tabIndex="-1"
                  >
                    {item.label}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

const App = () => {
  const options = [
    {
      label: "Loyalty club",
      items: [
        { label: "Item 1.1", link: "#" },
        { label: "Item 1.2", link: "#" },
        { label: "Item 1.3", link: "#" },
      ],
    },
    {
      label: "Fluerveda Assortments",
      items: [
        { label: "Item 2.1", link: "#" },
        { label: "Item 2.2", link: "#" },
        { label: "Item 2.3", link: "#" },
      ],
    },
    {
      label: "Ayurvedic Formulations",
      items: [
        { label: "Item 3.1", link: "#" },
        { label: "Item 3.2", link: "#" },
        { label: "Item 3.3", link: "#" },
      ],
    },
    {
      label: "Aromatherapy",
      items: [
        { label: "Item 3.1", link: "#" },
        { label: "Item 3.2", link: "#" },
        { label: "Item 3.3", link: "#" },
      ],
    },
    {
      label: "Ageless beauty",
      items: [
        { label: "Item 3.1", link: "#" },
        { label: "Item 3.2", link: "#" },
        { label: "Item 3.3", link: "#" },
      ],
    },
    {
      label: "Corporate",
      items: [
        { label: "Item 3.1", link: "#" },
        { label: "Item 3.2", link: "#" },
        { label: "Item 3.3", link: "#" },
      ],
    },
    {
      label: "Stories across the world",
      items: [
        { label: "Item 3.1", link: "#" },
        { label: "Item 3.2", link: "#" },
        { label: "Item 3.3", link: "#" },
      ],
    },
    {
      label: "Accessories",
      items: [
        { label: "Item 3.1", link: "#" },
        { label: "Item 3.2", link: "#" },
        { label: "Item 3.3", link: "#" },
      ],
    },
  ]

  return (
    <section className="flex items-center py-0">
      <Navbar2 options={options} />
    </section>
  )
}

export default App
