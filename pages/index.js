import { useContext } from "react";
import React from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { Context } from "../context";

export default function Auth() {
  const { username, setUsername, secret, setSecret } = useContext(Context);

  const router = useRouter();

  //  1c3e22ea-fc6f-4dc2-9aed-02149362639a

  function onSubmit(e) {
    e.preventDefault();
    if (username.legth === 0 || secret.legth === 0) return;
    axios
      .put(
        "https://api.chatengine.io/users/",
        { username, secret },
        { headers: { "Private-Key": "1c3e22ea-fc6f-4dc2-9aed-02149362639a" } }
      )

      .then((r) => router.push("/chats"));
  }
  return (
    <div className="background">
      <div className="auth-container">
        <form className="auth-form" onSubmit={(e) => onSubmit(e)}>
          <div className="auth-title">NEXTJS CHAT</div>
          <div className="input-container">
            <input
              placeholder="email"
              className="text-input"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-container">
            <input
              type="password"
              placeholder="password"
              className="text-input"
              onChange={(e) => setSecret(e.target.value)}
            />
          </div>

          <button type="submit" className="submit-button">
            Login / Sign up
          </button>
        </form>
      </div>
    </div>
  );
}
