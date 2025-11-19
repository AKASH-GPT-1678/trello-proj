import React, { useState } from "react";

export default function CreateBoardForm({ onCreated }: { onCreated?: () => void }) {
    const [title, setTitle] = useState("");
    const [loading, setLoading] = useState(false);

    async function createBoard(e: React.FormEvent) {
        e.preventDefault();
        if (!title.trim()) return;

        setLoading(true);

        try {
            const token = localStorage.getItem("token");

            const res = await fetch("http://localhost:5000/api/boards", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({ title }),
            });

            const data = await res.json();

            if (!res.ok) {
                alert(data.message || "Failed to create board");
                return;
            }

            alert("Board created successfully!");
            setTitle("");

            if (onCreated) onCreated(); // to reload boards if needed

        } catch (err) {
            console.error(err);
            alert("Server error");
        } finally {
            setLoading(false);
        }
    }

    return (
        <form
            onSubmit={createBoard}
            className="w-full max-w-md bg-white/10 backdrop-blur-lg p-4 rounded-xl border border-white/20 shadow-lg"
        >
            <h2 className="text-xl font-semibold mb-3 text-white">Create New Board</h2>

            <input
                type="text"
                placeholder="Enter board title..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full p-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 outline-none focus:border-blue-400"
            />

            <button
                type="submit"
                disabled={loading}
                className="w-full mt-3 py-2 bg-blue-500 rounded-lg text-white font-medium hover:bg-blue-600 transition"
            >
                {loading ? "Creating..." : "Create Board"}
            </button>
        </form>
    );
}
