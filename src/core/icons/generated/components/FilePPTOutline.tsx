import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/FilePPTOutline.svg';

export function FilePPTOutline(props: TProps) {
  return (
    <Icon {...props} name="FilePPTOutline">
      <SVG />
    </Icon>
  );
}
