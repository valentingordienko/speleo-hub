import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/AttachOutline.svg';

export function AttachOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="AttachOutline">
      <SVG />
    </Icon>
  );
}
