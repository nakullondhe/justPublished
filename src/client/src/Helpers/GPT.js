const GPTKey = "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";

export const getText = (type, description) => {
  return fetch("https://api.openai.com/v1/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${GPTKey}`,
    },
    body: JSON.stringify({
      model: "text-curie-001",
      prompt: type === 'caption' ? `write a caption for a photo which is descibed as "${description}" in first person perspective.The Caption should not include the original description text` : `generate 10 hashtags for an instagram phot which is described as "${description}".`,
      max_tokens: 300,
      temperature: 0.9,
    }),
  });
};


const GPTHelper = {
  getText,
};
export default GPTHelper;
