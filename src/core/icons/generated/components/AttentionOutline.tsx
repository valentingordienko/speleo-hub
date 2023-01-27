import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/AttentionOutline.svg';

export function AttentionOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="AttentionOutline">
      <SVG />
    </Icon>
  );
}
