import React from "react"
import { Box, ErrorCode } from "./style"

const NotFound = () => {
    return (
      <Box>
        <ErrorCode className="errorCode">404</ErrorCode>
        <h1>The page you are looking for doesn't exist</h1>
      </Box>
    )
}

export default NotFound
