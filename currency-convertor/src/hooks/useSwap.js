import { useState, useEffect } from 'react'

function useSwap(arg1, arg2) {
    let temp = arg1
    arg1 = arg2
    arg2 = temp    
}

