import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Markdown from 'react-native-markdown-display';

interface MarkdownViewerProps {
  markdownText: string;
}

const MarkdownViewer: React.FC<MarkdownViewerProps> = ({ markdownText }) => (
  <ScrollView style={styles.resultArea}>
    <Markdown>{markdownText}</Markdown>
  </ScrollView>
);

const styles = StyleSheet.create({
  resultArea: {
    flex: 1,
    padding: 10,
    margin:10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
});

export default MarkdownViewer;
