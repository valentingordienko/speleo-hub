import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/FilePPTOutline.svg';

export function FilePPTOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="FilePPTOutline">
      <SVG />
    </Icon>
  );
}
