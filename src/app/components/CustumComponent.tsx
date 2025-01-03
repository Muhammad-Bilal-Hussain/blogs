import { PortableTextComponents } from "@portabletext/react"

export const components:PortableTextComponents= {
    block: {
      h4: ({ children }) => <h4 className="text-2xl font-bold text-red-700 ">{children}</h4>,
      h3: ({ children }) => <h3 className="text-2xl font-bold text-red-700 ">{children}</h3>,
      normal: ({ children }) => <p className="text-xl text-white">{children}</p>,
    },
  }