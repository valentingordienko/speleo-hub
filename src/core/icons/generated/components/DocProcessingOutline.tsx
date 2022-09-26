import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/DocProcessingOutline.svg';

export function DocProcessingOutline(props: TProps) {
  return (
    <Icon {...props} name="DocProcessingOutline">
      <SVG />
    </Icon>
  );
}
