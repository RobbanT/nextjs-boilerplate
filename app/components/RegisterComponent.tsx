"use client";

import { FormEvent, useState } from "react";
import "./RegisterComponent.css";

interface Props {
    description: string;
}

function App(props: Props) {
    const [submit, setSubmit] = useState<boolean>(false);
    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        setSubmit(true);
    };
    return (
        <>
            <img src={"/lansforsakringar-logotyp.png"}></img>
            {submit === false ? (
                <div>
                    <h1>Anmälan för e-faktura</h1>
                    <p>{props.description}</p>
                    <form onSubmit={handleSubmit}>
                        <label>Personnummer</label>
                        <input type="text" inputMode="numeric" minLength={10} maxLength={10} placeholder="Ange personnummer..." required></input>
                        <label>Bank</label>
                        <select required>
                            <option value="" disabled>
                                Ange en bank...
                            </option>
                            <option>Swedbank</option>
                            <option>Handelsbanken</option>
                            <option>Ica Banken</option>
                            <option>SEB</option>
                            <option>Länsförsäkringar Bank</option>
                        </select>
                        <label>E-post</label>
                        <input type="email" placeholder="Ange e-post..." required></input>
                        <label>Telefonnummer</label>
                        <input type="tel" minLength={10} maxLength={14} placeholder="Ange telefonnummer..." required></input>
                        <button type="submit">Skicka anmälan</button>
                    </form>
                </div>
            ) : (
                <p>Tack för din anmälan!</p>
            )}
            <span>Telefon: 123 456 78 90</span>
            <span>E-post: test@test.se</span>
            <span>Hemsida: www.test.se</span>
        </>
    );
}

export default App;
