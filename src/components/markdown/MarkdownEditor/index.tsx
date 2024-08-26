import React, { useCallback } from 'react';
import { ScrollView, View } from 'react-native';
import LoadingIndicator from 'src/components/basicComponent/LoadingIndicator';
import TextArea from 'src/components/basicComponent/TextArea';
import MarkdownViewer from 'src/components/markdown/MarkdownViewer';
import CustomButton from 'src/components/basicComponent/CustomButton';
import useMarkdownEditor from 'src/hooks/useMarkdownEditor';
import useIsPortrait from 'src/hooks/useIsPortrait';
import debounce from 'lodash.debounce';
import { styles } from './styles';

const MarkdownEditor: React.FC = () => {
  const { markdownText, setMarkdownText, saveMarkdown, loading, handleReset } = useMarkdownEditor();
  const isPortrait = useIsPortrait();

  const debouncedSave = debounce(saveMarkdown, 2000);

  const handleTextChange = useCallback((text: string) => {
    setMarkdownText(text);
    debouncedSave(text);
  }, []);

  if (loading) {
    return <LoadingIndicator />;
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={{ flex: 1, flexDirection: isPortrait ? 'column' : 'row' }}>
        <TextArea
          value={markdownText}
          onChangeText={handleTextChange}
          placeholder="Enter your markdown here..."
          style={isPortrait ? styles.textAreaPortrait : styles.textAreaLandscape}
        />
        <MarkdownViewer markdownText={markdownText} />
      </View>
      <CustomButton title='Reset' onPress={handleReset} />
    </ScrollView>
  );
};



export default MarkdownEditor;
