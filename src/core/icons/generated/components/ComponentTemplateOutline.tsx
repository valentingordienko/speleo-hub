import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ComponentTemplateOutline.svg';

export function ComponentTemplateOutline(props: TProps) {
  return (
    <Icon {...props} name="ComponentTemplateOutline">
      <SVG />
    </Icon>
  );
}
