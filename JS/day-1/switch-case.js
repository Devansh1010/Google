/*
---

### 2. When to Use `return`
Using `return` is often considered "cleaner" in functional programming because it avoids **Fall-Through** bugs (where you forget a break and the code accidentally runs the next case).



**Best Use Cases:**
1.  **Getter Functions:** When the switch is inside a small helper function designed solely to return a specific value based on input.
2.  **Mapping Logic:** When you are converting one value to another (e.g., converting a status code to a human-readable string).
3.  **Early Exit:** When you want to stop processing immediately once a condition is met.

---

### 3. Pros and Cons

#### **Pros:**
* **Less Boilerplate:** You don't have to write `break;` on every line.
* **Safety:** You eliminate the risk of accidental fall-through.
* **Clarity:** It’s very clear that the function's job is over once a match is found.

#### **Cons:**
* **Side Effects:** If you had code at the bottom of the function (like logging or cleanup) that *needs* to run regardless of the switch result, `return` will skip it.
* **Debugging:** It can occasionally make stepping through code harder if a function has 10 different exit points.
---*/