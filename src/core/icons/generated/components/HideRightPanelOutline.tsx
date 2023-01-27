import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/HideRightPanelOutline.svg';

export function HideRightPanelOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="HideRightPanelOutline">
      <SVG />
    </Icon>
  );
}
