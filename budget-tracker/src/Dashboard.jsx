import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BudgetChart from "./BudgetChart";

const Dashboard = () => {
  const [transactions, setTransactions] = useState([]);
  const [expense, setExpense] = useState("");
  const [amount, setAmount] = useState("");
  const [totalBudget, setTotalBudget] = useState(50000);
  const [newBudget, setNewBudget] = useState("");

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const spent = transactions.reduce((sum, t) => sum + Number(t.amount), 0);
  const remaining = totalBudget - spent;

  const addTransaction = () => {
    if (!expense || !amount || isNaN(amount)) return;
    setTransactions([
      ...transactions,
      { id: Date.now(), description: expense, amount: Number(amount) },
    ]);
    setExpense("");
    setAmount("");
  };

  const updateBudget = () => {
    if (!newBudget || isNaN(newBudget)) return;
    setTotalBudget(Number(newBudget));
    setNewBudget("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-pink-200 to-purple-200 text-gray-800 p-6 relative">

      {/* 🔒 Logout button - fixed top-right */}
      <div className="flex justify-end">
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded shadow-md text-sm"
        >
          🚪 Logout
        </button>
      </div>

      {/* Main Card */}
      <div className="max-w-2xl mx-auto bg-white p-8 mt-4 rounded-3xl shadow-2xl space-y-8">
        <h1 className="text-4xl font-extrabold text-yellow-600 text-center">
          💰 Budget Tracker
        </h1>

        {/* Budget Overview */}
        <div className="space-y-2">
          <h2 className="text-2xl font-bold">📊 Budget Overview</h2>
          <p>Total Budget: ₹{totalBudget.toLocaleString()}</p>
          <p>Spent: ₹{spent.toLocaleString()}</p>
          <p>Remaining: ₹{remaining.toLocaleString()}</p>
          <BudgetChart budget={totalBudget} expenses={spent} />
        </div>

        {/* Add Transaction */}
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            placeholder="📝 Expense Name"
            value={expense}
            onChange={(e) => setExpense(e.target.value)}
            className="border border-gray-300 rounded-md px-4 py-2 w-full"
          />
          <input
            type="number"
            placeholder="💵 Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="border border-gray-300 rounded-md px-4 py-2 w-full"
          />
          <button
            onClick={addTransaction}
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
          >
            ➕ Add
          </button>
        </div>

        {/* Transactions */}
        <div>
          <h2 className="text-2xl font-bold mb-2">🧾 Transactions</h2>
          {transactions.length === 0 ? (
            <p>No transactions yet.</p>
          ) : (
            <ul className="space-y-2">
              {transactions.map((t) => (
                <li key={t.id} className="flex justify-between items-center bg-gray-100 px-4 py-2 rounded-md">
                  {t.isEditing ? (
                    <>
                      <input
                        className="border px-2 py-1 rounded mr-2"
                        value={t.description}
                        onChange={(e) =>
                          setTransactions((prev) =>
                            prev.map((item) =>
                              item.id === t.id ? { ...item, description: e.target.value } : item
                            )
                          )
                        }
                      />
                      <input
                        type="number"
                        className="border px-2 py-1 rounded mr-2 w-24"
                        value={t.amount}
                        onChange={(e) =>
                          setTransactions((prev) =>
                            prev.map((item) =>
                              item.id === t.id ? { ...item, amount: Number(e.target.value) } : item
                            )
                          )
                        }
                      />
                      <button
                        onClick={() =>
                          setTransactions((prev) =>
                            prev.map((item) =>
                              item.id === t.id ? { ...item, isEditing: false } : item
                            )
                          )
                        }
                        className="bg-green-500 text-white px-2 py-1 rounded"
                      >
                        ✅ Save
                      </button>
                    </>
                  ) : (
                    <>
                      <span>{t.description}</span>
                      <div className="flex gap-2 items-center">
                        <span className="text-red-600 font-semibold">-₹{t.amount.toLocaleString()}</span>
                        <button
                          onClick={() =>
                            setTransactions((prev) =>
                              prev.map((item) =>
                                item.id === t.id ? { ...item, isEditing: true } : item
                              )
                            )
                          }
                          className="text-blue-600 hover:text-blue-800"
                          title="Edit"
                        >
                          ✏️
                        </button>
                        <button
                          onClick={() =>
                            setTransactions((prev) => prev.filter((item) => item.id !== t.id))
                          }
                          className="text-red-600 hover:text-red-800"
                          title="Delete"
                        >
                          🗑️
                        </button>
                      </div>
                    </>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Budget Settings */}
        <div className="bg-white shadow-md p-4 rounded-xl border border-gray-200">
          <h2 className="text-2xl font-bold mb-2 text-indigo-600">⚙️ Budget Settings</h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="number"
              placeholder="💼 New Budget Amount"
              value={newBudget}
              onChange={(e) => setNewBudget(e.target.value)}
              className="border border-gray-300 rounded-md px-4 py-2 w-full"
            />
            <button
              onClick={updateBudget}
              className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition"
            >
              🛠️ Update Budget
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
