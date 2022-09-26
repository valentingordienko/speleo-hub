import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/HideRightPanelOutline.svg';

export function HideRightPanelOutline(props: TProps) {
  return (
    <Icon {...props} name="HideRightPanelOutline">
      <SVG />
    </Icon>
  );
}
