import 'antd/dist/antd.css';

import { Radio } from 'antd';
import React, { useState } from 'react';

import styles from './App.module.css';
import { AntdForm } from './components/antd/AntdForm';
import { ChakraForm } from './components/chakra/ChakraForm';

function App() {
  const [designSystem, setDesignSystem] = useState('antd');

  return (
    <div className={styles.container}>
      <div className={styles.radio}>
        <Radio.Group
          options={[
            { label: 'antd', value: 'antd' },
            { label: 'chakra', value: 'chakra' },
          ]}
          onChange={e => setDesignSystem(e.target.value)}
          value={designSystem}
          optionType="button"
        />
      </div>

      <div className={styles.form}>
        {designSystem === 'antd' ? <AntdForm /> : <ChakraForm />}
      </div>
    </div>
  );
}

export default App;
