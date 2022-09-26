import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/AddFromTemplateOutline.svg';

export function AddFromTemplateOutline(props: TProps) {
  return (
    <Icon {...props} name="AddFromTemplateOutline">
      <SVG />
    </Icon>
  );
}
