import React, { useState, useEffect } from 'react';
import { AIRecommendation, AIService } from '../services/aiService';
import { Task } from '../types/task';
import { useTheme } from '../context/ThemeContext';

interface AIAssistantProps {
  tasks: Task[];
}

export const AIAssistant: React.FC<AIAssistantProps> = ({ tasks }) => {
  const { colors, theme } = useTheme();
  const [recommendations, setRecommendations] = useState<AIRecommendation[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const suggestions = AIService.generateTaskSuggestions(tasks);
    setRecommendations(suggestions);
  }, [tasks]);

  if (recommendations.length === 0) return null;

  const currentRec = recommendations[activeIndex];

  const getRecommendationStyle = () => ({
    backgroundColor: theme === 'dark' ? '#1E293B' : '#F0F4FF',
    borderLeft: `4px solid ${colors.primary}`,
    color: colors.text,
  });

  const getActionButtonStyle = () => ({
    backgroundColor: colors.primary,
    color: theme === 'dark' ? '#000' : '#fff',
    border: 'none',
    borderRadius: '6px',
    padding: '8px 16px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: 'bold',
    transition: 'all 0.3s ease',
  });

  const getCloseButtonStyle = () => ({
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: '20px',
    color: colors.textSecondary,
    padding: '0',
  });

  return (
    <div
      style={{
        marginBottom: '24px',
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: theme === 'dark' ? '0 4px 12px rgba(0,0,0,0.4)' : '0 4px 12px rgba(0,0,0,0.1)',
      }}
    >
      {/* Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '12px 16px',
          backgroundColor: theme === 'dark' ? '#0F172A' : '#FFFFFF',
          borderBottom: `1px solid ${colors.border}`,
          cursor: 'pointer',
        }}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ fontSize: '24px' }}>🤖</span>
          <div>
            <h6 style={{ margin: '0 0 2px 0', color: colors.text, fontWeight: 'bold' }}>
              AI Assistant
            </h6>
            <p style={{ margin: 0, fontSize: '12px', color: colors.textSecondary }}>
              {recommendations.length} recommendation(s)
            </p>
          </div>
        </div>
        <span style={{ color: colors.textSecondary, fontSize: '20px' }}>
          {isExpanded ? '▼' : '▶'}
        </span>
      </div>

      {/* Content */}
      {isExpanded && (
        <div style={{ padding: '16px', backgroundColor: theme === 'dark' ? '#0F172A' : '#FFFFFF' }}>
          {/* Current Recommendation */}
          <div style={getRecommendationStyle()} className="d-flex justify-content-between align-items-start p-4 mb-3 rounded">
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '32px', marginBottom: '8px' }}>{currentRec.icon}</div>
              <h5 style={{ margin: '0 0 8px 0', color: colors.text, fontWeight: 'bold' }}>
                {currentRec.title}
              </h5>
              <p style={{ margin: 0, color: colors.textSecondary, fontSize: '14px', lineHeight: '1.5' }}>
                {currentRec.description}
              </p>
              {currentRec.action && (
                <button
                  style={getActionButtonStyle()}
                  className="mt-3"
                  onMouseEnter={(e) => {
                    (e.target as HTMLElement).style.opacity = '0.85';
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLElement).style.opacity = '1';
                  }}
                >
                  {currentRec.action}
                </button>
              )}
            </div>
          </div>

          {/* Navigation */}
          {recommendations.length > 1 && (
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '16px' }}>
              <button
                style={{
                  backgroundColor: colors.primary,
                  color: theme === 'dark' ? '#000' : '#fff',
                  border: 'none',
                  borderRadius: '6px',
                  padding: '8px 16px',
                  cursor: 'pointer',
                  fontSize: '14px',
                }}
                onClick={() => setActiveIndex((prev) => (prev - 1 + recommendations.length) % recommendations.length)}
              >
                ← Previous
              </button>

              <div style={{ display: 'flex', gap: '6px' }}>
                {recommendations.map((_, idx) => (
                  <button
                    key={idx}
                    style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      border: 'none',
                      cursor: 'pointer',
                      backgroundColor: idx === activeIndex ? colors.primary : colors.border,
                      transition: 'all 0.3s ease',
                    }}
                    onClick={() => setActiveIndex(idx)}
                  />
                ))}
              </div>

              <button
                style={{
                  backgroundColor: colors.primary,
                  color: theme === 'dark' ? '#000' : '#fff',
                  border: 'none',
                  borderRadius: '6px',
                  padding: '8px 16px',
                  cursor: 'pointer',
                  fontSize: '14px',
                }}
                onClick={() => setActiveIndex((prev) => (prev + 1) % recommendations.length)}
              >
                Next →
              </button>
            </div>
          )}

          {/* All Recommendations Grid */}
          {recommendations.length > 1 && (
            <div style={{ marginTop: '24px', borderTop: `1px solid ${colors.border}`, paddingTop: '16px' }}>
              <p style={{ margin: '0 0 12px 0', color: colors.textSecondary, fontSize: '12px', fontWeight: 'bold' }}>
                ALL RECOMMENDATIONS
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '12px' }}>
                {recommendations.map((rec, idx) => (
                  <div
                    key={rec.id}
                    style={{
                      padding: '12px',
                      backgroundColor: theme === 'dark' ? '#1E293B' : '#F8FAFC',
                      borderRadius: '8px',
                      border: idx === activeIndex ? `2px solid ${colors.primary}` : `1px solid ${colors.border}`,
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                    }}
                    onClick={() => setActiveIndex(idx)}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                      (e.currentTarget as HTMLElement).style.boxShadow = `0 4px 8px rgba(0,0,0,0.1)`;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                      (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                    }}
                  >
                    <div style={{ fontSize: '20px', marginBottom: '6px' }}>{rec.icon}</div>
                    <h6 style={{ margin: '0 0 6px 0', color: colors.text, fontSize: '13px', fontWeight: 'bold' }}>
                      {rec.title.length > 30 ? rec.title.substring(0, 27) + '...' : rec.title}
                    </h6>
                    <p style={{ margin: 0, fontSize: '11px', color: colors.textSecondary }}>
                      {rec.type}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
