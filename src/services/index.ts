import { mockTasks } from "./mockData";
import { AIService, AIRecommendation } from "./aiService";

export { AIService };

// Hook for easy access to AI features
export const useAIFeatures = () => {
  const getSuggestions = () => AIService.generateTaskSuggestions(mockTasks);
  const getPriority = () => AIService.getPrioritySuggestions(mockTasks);
  const getFocusMode = () => AIService.getFocusModeRecommendation(mockTasks);
  const getMotivation = () => AIService.getTimeBasedMotivation();

  return {
    suggestions: getSuggestions(),
    priority: getPriority(),
    focusMode: getFocusMode(),
    motivation: getMotivation(),
  };
};
