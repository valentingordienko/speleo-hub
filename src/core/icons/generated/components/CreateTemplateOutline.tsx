import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/CreateTemplateOutline.svg';

export function CreateTemplateOutline(props: TProps) {
  return (
    <Icon {...props} name="CreateTemplateOutline">
      <SVG />
    </Icon>
  );
}
