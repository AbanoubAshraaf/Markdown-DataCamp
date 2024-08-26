import React from 'react';
import SafeAreaWrapper from 'src/components/basicComponent/SafeAreaWrapper';
import MarkdownEditor from 'src/components/markdown/MarkdownEditor';

const App: React.FC = () => {
  return (
    <SafeAreaWrapper>
      <MarkdownEditor />
    </SafeAreaWrapper>
  );
};

export default App;
