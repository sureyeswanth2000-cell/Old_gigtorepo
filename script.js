async function sendMessage() {

    alert("Button clicked ✅");

    const userInput = document.getElementById("userInput").value;

    alert("User input: " + userInput);

    try {

        const response = await fetch(
            "https://api-inference.huggingface.co/models/google/flan-t5-base",
            {
                method: "POST",
                headers: {
                    "Authorization": "Bearer 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",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    inputs: userInput
                })
            }
        );

        alert("Request sent 🚀");

        const result = await response.json();

        alert("Response received 📩");

        alert(JSON.stringify(result));

        document.getElementById("response").innerText =
            result[0]?.generated_text || JSON.stringify(result);

    } catch (error) {

        alert("Error occurred ❌");
        alert(error);

    }
}
