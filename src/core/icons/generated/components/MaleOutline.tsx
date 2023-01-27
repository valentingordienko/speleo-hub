import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/MaleOutline.svg';

export function MaleOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="MaleOutline">
      <SVG />
    </Icon>
  );
}
