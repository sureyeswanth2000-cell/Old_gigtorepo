async function sendMessage() {

    const userInput = document.getElementById("userInput").value;

    const response = await fetch(
        "https://api-inference.huggingface.co/models/google/flan-t5-base",
        {
            method: "POST",
            headers: {
                "Authorization": "Bearer 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",  // your token here
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                inputs: userInput
            })
        }
    );

    const result = await response.json();

    console.log(result); // very important for debugging

    document.getElementById("response").innerText =
        result[0]?.generated_text || JSON.stringify(result);
}
