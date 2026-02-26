import { Task } from "../types/task";

export interface AIRecommendation {
  id: string;
  type: 'suggestion' | 'tip' | 'priority' | 'focus';
  title: string;
  description: string;
  action?: string;
  icon: string;
}

export class AIService {
  // Generate smart task suggestions based on current state
  static generateTaskSuggestions(tasks: Task[]): AIRecommendation[] {
    const hour = new Date().getHours();
    const recommendations: AIRecommendation[] = [];

    // Morning motivation
    if (hour >= 6 && hour < 12) {
      const priorityTasks = tasks.filter(t => t.priority === 'high' && t.status !== 'done');
      if (priorityTasks.length > 0) {
        recommendations.push({
          id: 'morning-priority',
          type: 'priority',
          title: 'Focus on High Priority Tasks',
          description: `You have ${priorityTasks.length} high-priority task(s) waiting. Your morning energy is best used here!`,
          icon: '🎯',
          action: 'View Tasks'
        });
      }
    }

    // Afternoon slump
    if (hour >= 12 && hour < 17) {
      const inProgressTasks = tasks.filter(t => t.status === 'in-progress');
      if (inProgressTasks.length > 2) {
        recommendations.push({
          id: 'focus-mode',
          type: 'focus',
          title: 'Enable Focus Mode',
          description: 'You have multiple tasks in progress. Consider focusing on one at a time to boost productivity.',
          icon: '🧠',
          action: 'Start Focus Mode'
        });
      }
    }

    // Completion suggestion
    const completionRate = tasks.filter(t => t.status === 'done').length / tasks.length;
    if (completionRate < 0.3 && tasks.length > 0) {
      recommendations.push({
        id: 'completion-boost',
        type: 'tip',
        title: 'Let\'s Complete Some Tasks',
        description: `Only ${Math.round(completionRate * 100)}% of your tasks are done. Pick one and finish it now!`,
        icon: '✅',
        action: 'Mark Complete'
      });
    }

    // Evening wind-down
    if (hour >= 17 && hour < 21) {
      const todoTasks = tasks.filter(t => t.status === 'todo');
      if (todoTasks.length > 0) {
        recommendations.push({
          id: 'plan-tomorrow',
          type: 'suggestion',
          title: 'Plan Tomorrow\'s Tasks',
          description: `You have ${todoTasks.length} task(s) to start. Planning ahead helps you hit the ground running!`,
          icon: '📅',
          action: 'Plan'
        });
      }
    }

    // Productivity tip
    const tips = [
      {
        title: 'The Pomodoro Technique',
        description: 'Work in 25-minute focused intervals with 5-minute breaks for maximum productivity.',
        icon: '⏱️'
      },
      {
        title: 'First Things First',
        description: 'Always tackle the most important task when your energy is highest.',
        icon: '💪'
      },
      {
        title: 'Break It Down',
        description: 'Large tasks feel overwhelming. Break them into smaller, manageable subtasks.',
        icon: '🔨'
      },
      {
        title: 'Minimize Distractions',
        description: 'Turn off notifications and find a quiet space to enter a deep focus state.',
        icon: '🚫'
      }
    ];

    const randomTip = tips[Math.floor(Math.random() * tips.length)];
    recommendations.push({
      id: 'productivity-tip',
      type: 'tip',
      ...randomTip
    });

    return recommendations;
  }

  // Get priority suggestions based on task count
  static getPrioritySuggestions(tasks: Task[]): AIRecommendation {
    const urgentTasks = tasks.filter(t => t.priority === 'high' && t.status !== 'done').length;
    const mediumTasks = tasks.filter(t => t.priority === 'medium' && t.status !== 'done').length;

    let suggestion: AIRecommendation;

    if (urgentTasks > 3) {
      suggestion = {
        id: 'urgent-alert',
        type: 'priority',
        title: 'Action Required!',
        description: `You have ${urgentTasks} urgent tasks that need attention immediately.`,
        icon: '🚨',
        action: 'View Urgent'
      };
    } else if (mediumTasks > 5) {
      suggestion = {
        id: 'workload-alert',
        type: 'priority',
        title: 'Heavy Workload Detected',
        description: `Consider delegating or postponing ${mediumTasks} medium-priority tasks.`,
        icon: '⚠️',
        action: 'Reorganize'
      };
    } else {
      suggestion = {
        id: 'balanced-workload',
        type: 'priority',
        title: 'Balanced Workload',
        description: 'Your task load looks manageable. Keep up the good pace!',
        icon: '✨',
        action: 'Continue'
      };
    }

    return suggestion;
  }

  // Get focus mode recommendation
  static getFocusModeRecommendation(tasks: Task[]): AIRecommendation {
    const nextTask = tasks.find(t => t.status === 'todo' || t.status === 'in-progress');
    
    return {
      id: 'focus-recommendation',
      type: 'focus',
      title: nextTask ? `Focus on: ${nextTask.title}` : 'All caught up!',
      description: nextTask 
        ? `This is your next priority. Block distractions and dive in!`
        : 'You\'re all caught up! Time to relax or plan ahead.',
      icon: '🎯',
      action: nextTask ? 'Start Focus' : 'Celebrate'
    };
  }

  // Get time-based motivation
  static getTimeBasedMotivation(): AIRecommendation {
    const hour = new Date().getHours();
    const motivations = {
      morning: {
        title: '🌅 Rise and Shine!',
        description: 'Your morning is golden. Use this energy for your most important tasks!',
        icon: '☀️'
      },
      afternoon: {
        title: '☕ Afternoon Energy Check',
        description: 'Stay hydrated and energized. You\'re past the halfway point!',
        icon: '💪'
      },
      evening: {
        title: '🌙 Evening Wind-Down',
        description: 'Wrap up your day strong. Review what you accomplished!',
        icon: '🌟'
      },
      night: {
        title: '😴 Rest is Important',
        description: 'It\'s getting late. Consider wrapping up for the day and getting good sleep.',
        icon: '💤'
      }
    };

    let period: keyof typeof motivations = 'day';
    if (hour >= 6 && hour < 12) period = 'morning';
    else if (hour >= 12 && hour < 17) period = 'afternoon';
    else if (hour >= 17 && hour < 21) period = 'evening';
    else period = 'night';

    const mot = motivations[period];
    return {
      id: 'motivation',
      type: 'tip',
      title: mot.title,
      description: mot.description,
      icon: mot.icon
    };
  }
}
