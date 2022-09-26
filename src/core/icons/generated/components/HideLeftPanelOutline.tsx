import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/HideLeftPanelOutline.svg';

export function HideLeftPanelOutline(props: TProps) {
  return (
    <Icon {...props} name="HideLeftPanelOutline">
      <SVG />
    </Icon>
  );
}
