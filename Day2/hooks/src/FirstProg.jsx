import React, { useCallback, useState, useEffect } from 'react'

function FirstProg() {
    const [numAllowed, setNumAllowed] = useState(false);
    const [charAllowed, setCharAllowed] = useState(false);
    const [password, setPassword] = useState("")
    const [length, setLength] = useState(8);

    const passwordGenerator = useCallback(() => {
        let pass = ""
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

        if (numAllowed) {
            str += "12345678900987654321"
        }
        if (charAllowed) {
            str += "~!@#$%^&*()_+{}[[],."
        }

        for (let i = 0; i <= length; i++) {
            let char = Math.floor(Math.random() * str.length)
            pass += str.charAt(char)
        }

        setPassword(pass);

    }, [length, numAllowed, charAllowed])

    useEffect(() => {
        passwordGenerator()
    }, [length, numAllowed, charAllowed, passwordGenerator])

    const copyText = () => {
        window.navigator.clipboard.writeText(password);
        alert("Text copied !!")
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900">
            <div className="bg-gray-800 p-6 rounded-lg w-full max-w-md shadow-lg">

                <h2 className="text-white text-xl font-semibold mb-4 text-center">
                    Password Generator
                </h2>

                <div className="flex gap-2 mb-4">
                    <input
                        type="text"
                        value={password}
                        readOnly
                        placeholder="Password"
                        className="w-full px-3 py-2 rounded bg-gray-700 text-white outline-none"
                    />
                    <button onClick={copyText} className="px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                        Copy
                    </button>
                </div>

                <div className="mb-4">
                    <input
                        type="range"
                        min={7}
                        max={40}
                        value={length}
                        className="w-full cursor-pointer"
                        onChange={(e) => {
                            setLength(e.target.value)
                        }}
                    />
                    <label className="text-white text-sm">
                        Length: {length}
                    </label>
                </div>

                <div className="flex items-center gap-2 mb-2">
                    <input
                        type="checkbox"
                        defaultChecked={charAllowed}
                        id="charInput"
                        onChange={() => {
                            setCharAllowed((prev) => !prev)
                        }}
                    />
                    <label htmlFor="charInput" className="text-white text-sm">
                        Characters
                    </label>
                </div>

                <div className="flex items-center gap-2">
                    <input
                        type="checkbox"
                        defaultChecked={numAllowed}
                        id="numAllowed"
                        onChange={() => {
                            setNumAllowed((prev) => !prev)
                        }}
                    />
                    <label htmlFor="numAllowed" className="text-white text-sm">
                        Numbers
                    </label>
                </div>

            </div>
        </div>
    )
}

export default FirstProg
