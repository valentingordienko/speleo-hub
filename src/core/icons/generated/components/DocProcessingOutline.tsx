import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/DocProcessingOutline.svg';

export function DocProcessingOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="DocProcessingOutline">
      <SVG />
    </Icon>
  );
}
