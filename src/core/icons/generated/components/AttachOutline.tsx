import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/AttachOutline.svg';

export function AttachOutline(props: TProps) {
  return (
    <Icon {...props} name="AttachOutline">
      <SVG />
    </Icon>
  );
}
