export const envConfig = {
  baseUrl: process.env.NEXT_PUBLIC_MOCK_POSTMAN_API,
};

export const questionData = [
  {
    question_data: {
      definition:
        "My name is Lisa. I wake up at 7 o'clock every morning. I take a shower and get dressed. Then, I have breakfast with my family. After that, I go to school. I study English and math. I have lunch at 12 o'clock. In the afternoon, I have art class. I go home at 4 o'clock. In the evening, I watch TV and do my homework. I go to bed at 9 o'clock.",
      options: ["7 o'clock", "6 o'clock", "8 o'clock", "9 o'clock"],
      passage_id: "d2ade29b-2fb4-4644-8770-f806baab5830",
      question: "What time does Lisa wake up?",
      answer: "7 o'clock",
    },
    question_id: 1,
  },
  {
    question_data: {
      passage:
        "My name is Lisa. I wake up at 7 o'clock every morning. I take a shower and get dressed. Then, I have breakfast with my family. After that, I go to school. I study English and math. I have lunch at 12 o'clock. In the afternoon, I have art class. I go home at 4 o'clock. In the evening, I watch TV and do my homework. I go to bed at 9 o'clock.",
      options: [
        "Take a shower and get dressed",
        "Have breakfast with her family",
        "Go to school",
        "Watch TV",
      ],
      passage_id: "d2ade29b-2fb4-4644-8770-f806baab5830",
      question: "What does Lisa do after waking up?",
      answer: "Take a shower and get dressed",
    },
    question_id: 2,
  },
];
