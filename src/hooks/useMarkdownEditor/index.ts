import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';

const MARKDOWN_STORAGE_KEY = 'markdownText';

const useMarkdownEditor = () => {
  const [markdownText, setMarkdownText] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadMarkdown = async () => {
      try {
        const savedText = await AsyncStorage.getItem(MARKDOWN_STORAGE_KEY);
        if (savedText) {
          setMarkdownText(savedText);
        }
      } catch (error) {
        Alert.alert('Error', 'Failed to load saved markdown text.');
      } finally {
        setLoading(false);
      }
    };

    loadMarkdown();
  }, []);

  const saveMarkdown = async (text: string) => {
    try {
      await AsyncStorage.setItem(MARKDOWN_STORAGE_KEY, text);
    } catch (error) {
      Alert.alert('Error', 'Failed to save markdown text.');
    }
  };

  const handleReset = () => {
    setMarkdownText('');
  };

  return {
    markdownText,
    setMarkdownText,
    saveMarkdown,
    loading,
    handleReset,
  };
};

export default useMarkdownEditor;
